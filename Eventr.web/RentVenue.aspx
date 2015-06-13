<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="RentVenue.aspx.cs" Inherits="RentVenue" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    What kinda of Event Are you Planning to Organize?<br />
    <asp:DropDownList ID="DropDownList1" runat="server"></asp:DropDownList>

    No of pax in your event<br />
    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>

    Date of Event<br />
    <asp:Calendar ID="Calendar1" runat="server"></asp:Calendar>

    Time of Event<br />

</asp:Content>

