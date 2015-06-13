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
    Location:<br />
    <asp:TextBox ID="txtLocation" runat="server"></asp:TextBox><br /><br />

    Dates Available:<br />
    From: <input type="text" id="datepickerFrom">   To: <input type="text" id="datepickerTo"><br /><br />

    Time Available:<br />
    From: <input type="text" id="timepickerFrom">   To: <input type="text" id="timepickerTo"><br /><br /> 

    No of Pax Supported: <br />
    Minimum: <asp:TextBox ID="txtPaxMin" runat="server"></asp:TextBox>   Maximum: <asp:TextBox ID="txtPaxMax" runat="server"></asp:TextBox><br /><br />

    Event Category:
    <asp:CheckBoxList ID="chkEventCategory" runat="server"></asp:CheckBoxList>

    How much does it cost to rent your place?
    <asp:TextBox ID="txtPrice" runat="server"></asp:TextBox> per <asp:DropDownList ID="ddlPriceType" runat="server"></asp:DropDownList>
</asp:Content>

