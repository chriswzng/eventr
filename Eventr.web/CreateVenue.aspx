<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="CreateVenue.aspx.cs" Inherits="CreateVenue" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">

    <script>
        var accessToken = "";

        $(function () {
            $("#datepickerFrom").datepicker();
            $("#datepickerTo").datepicker();
            $("#timepickerFrom").timepicker();
            $("#timepickerTo").timepicker();

            $.get("https://graph.facebook.com/oauth/access_token?client_id=903664066366504&client_secret=46f1495831af757b9ecd51333f1a2606&grant_type=client_credentials", function (response) {
                accessToken = response.split('=')[1];
            }).error(function () {
                alert("Sorry, unable to get FB Access Token")
            });
        });

        function selectLocation(location) {
            var textbox = $("#txtLocation");
            textbox.val(location);
        };

        function getPlaces() {
            var textbox = $("#txtLocation");
            if (textbox.val().length == 0) {
                $('#locationListViewDiv').empty();
                return;
            }

            $.get("https://graph.facebook.com/v2.3/search?q=" + textbox.val() + "&type=place&oauth_token=" + accessToken + "&oauth_signature_method=HMAC-SHA1&oauth_nonce=LEAOAU&oauth_version=1.0&oauth_signature=5WXXnruxh+k7QVlBF7BnYFsYLAU=", function (response) {
                var facebookPlaceDatas = response.data.filter(onlyUnique);
                var facebookPlaceNames = [];
                $.each(facebookPlaceDatas, function (key, facebookPlaceData) {
                    facebookPlaceNames.push(facebookPlaceData.name);
                    //$.get("https://graph.facebook.com/v2.3/" + facebookPlaceData.id + "/photos?oauth_token=" + accessToken + "&oauth_signature_method=HMAC-SHA1&oauth_nonce=LEAOAU&oauth_version=1.0&oauth_signature=5WXXnruxh+k7QVlBF7BnYFsYLAU=", function (response) {
                    //    var facebookPhotoDatas = response.data;
                    //});
                });

                $('#locationListViewDiv').empty();
                $('#locationListViewDiv')
                    .append($("<select></select>")
                    .attr("onchange", "selectPlace();")
                    .attr("id", "locationListView"));

                facebookPlaceNames = facebookPlaceNames.filter(onlyUnique);
                $.each(facebookPlaceNames, function (key, facebookPlaceName) {
                    $('#locationListView')
                        .append($("<option></option>")
                        .attr("value", facebookPlaceName)
                        .text(facebookPlaceName));
                });
            }).error(function () {
                alert("Sorry could not proceed")
            });
        }

        function selectPlace() {
            var locationListView = $("#locationListView");
            $("#txtLocation").val(locationListView.val());
            $('#locationListViewDiv').empty();
        }

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1>Create a Venue for Rent</h1>
    Location:<br />
    <input type="text" id="txtLocation" onkeyup="getPlaces();" /><br /><br /><br />
    <div id="locationListViewDiv">
    </div><br />

    Dates Available:<br />
    From:
    <input type="text" id="datepickerFrom" />
    To:
    <input type="text" id="datepickerTo" /><br />
    <br />

    Time Available:<br />
    From:
    <input type="text" id="timepickerFrom"/>
    To:
    <input type="text" id="timepickerTo"/><br />
    <br />

    No of Pax Supported:
    <br />
    Minimum:
    <asp:TextBox ID="txtPaxMin" runat="server" Width="50" MaxLength="5"></asp:TextBox>
    Maximum:
    <asp:TextBox ID="txtPaxMax" runat="server" Width="50" MaxLength="5"></asp:TextBox><br />
    <br />

    Event Category:
    <asp:CheckBoxList ID="chkEventCategory" runat="server" RepeatLayout="table" RepeatColumns="2" RepeatDirection="vertical">
        <asp:ListItem>Birthday</asp:ListItem>
        <asp:ListItem>Wedding</asp:ListItem>
        <asp:ListItem>Conference</asp:ListItem>
        <asp:ListItem>Team Building</asp:ListItem>
        <asp:ListItem>Press Conference</asp:ListItem>
        <asp:ListItem>Seminar</asp:ListItem>
        <asp:ListItem>Meeting</asp:ListItem>
        <asp:ListItem>Party</asp:ListItem>
        <asp:ListItem>Product Launch</asp:ListItem>
    </asp:CheckBoxList>

    How much does it cost to rent your place?
    <asp:TextBox ID="txtPrice" runat="server"></asp:TextBox>
    per
    <asp:DropDownList ID="ddlPriceType" runat="server">
        <asp:ListItem>Hour</asp:ListItem>
        <asp:ListItem>Day</asp:ListItem>
    </asp:DropDownList><br />
    <br />

    <asp:Button ID="btnCreate" runat="server" Text="Create Venue for Rent" />
</asp:Content>

