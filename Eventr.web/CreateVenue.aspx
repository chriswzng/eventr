<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="CreateVenue.aspx.cs" Inherits="CreateVenue" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <script>
      $(function() {
          $("#datepickerFrom").datepicker();
          $("#datepickerTo").datepicker();
          $("#timepickerFrom").timepicker();
      });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h1>Create a Venue for Rent</h1>
    Location:<br />
    <asp:TextBox ID="txtLocation" runat="server" AutoPostBack="true" OnTextChanged="txtLocation_TextChanged"></asp:TextBox><br /><br />

    Dates Available:<br />
    From: <input type="text" id="datepickerFrom"/>   To: <input type="text" id="datepickerTo"/><br /><br />

    Time Available:<br />
    From: <input type="text" id="timepickerFrom">   To: <input type="text" id="timepickerTo"><br /><br /> 

    No of Pax Supported: <br />
    Minimum: <asp:TextBox ID="txtPaxMin" runat="server" Width="50" MaxLength="5"></asp:TextBox>   Maximum: <asp:TextBox ID="txtPaxMax" runat="server" Width="50" MaxLength="5"></asp:TextBox><br /><br />

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
    <asp:TextBox ID="txtPrice" runat="server"></asp:TextBox> per <asp:DropDownList ID="ddlPriceType" runat="server">
        <asp:ListItem>Hour</asp:ListItem>
        <asp:ListItem>Day</asp:ListItem>
    </asp:DropDownList><br /><br />

    <asp:Button ID="btnCreate" runat="server" Text="Create Venue for Rent" />
</asp:Content>

