<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="CreateEventService.aspx.cs" Inherits="CreateEventService" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <script>
        $(function () {
            $("#datepickerFrom").datepicker();
            $("#datepickerTo").datepicker();
            $("#timepickerFrom").timepicker();
            $("#timepickerTo").timepicker();
        });
    </script>

    <h1>Create an Event Service</h1>
    What Type of Service do you Provide?
    <asp:DropDownList ID="DropDownList1" runat="server">
        <asp:ListItem>Cake Supplying</asp:ListItem>
        <asp:ListItem>Canopy Rental</asp:ListItem>
        <asp:ListItem>Fan Rental</asp:ListItem>
        <asp:ListItem>Food Catering</asp:ListItem>
        <asp:ListItem>Sound System Rental</asp:ListItem>
        <asp:ListItem>Lighting System Rental</asp:ListItem>
        <asp:ListItem>Emceeing</asp:ListItem>
</asp:DropDownList><br /><br />

    Dates Available:<br />
    From: <input type="text" id="datepickerFrom"/>   To: <input type="text" id="datepickerTo"/><br /><br />

    Time Available:<br />
    From: <input type="text" id="timepickerFrom"/>   To: <input type="text" id="timepickerTo"/><br /><br />

    Description:<br />
    <asp:TextBox ID="TextBox1" runat="server" TextMode="MultiLine" Height="115px" Width="316px"></asp:TextBox><br /><br />
    <asp:Button ID="btnCreate" runat="server" Text="Create Event Service" />
</asp:Content>

