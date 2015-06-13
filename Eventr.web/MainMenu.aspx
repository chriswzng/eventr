<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="MainMenu.aspx.cs" Inherits="MainMenu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h1 style="text-align:center;">Welcome back to Eventr, Derek. How can I help you for your event?</h1>
    <table style="width:100%;border-collapse: separate;border-spacing: 10px 30px;">
        <tr>
            <td style="width:31%; margin: 5px; text-align:center;">
                <img src="Images/mobile-main-01-text.png" runat="server"/>
            </td>
            <td style="width:31%; margin: 5px; text-align:center;">
                <asp:ImageButton ID="imgCreateVenue" runat="server" ImageUrl="~/Images/mobile-swipe-bg02-text.png" OnClick="btnCreateVenue_Click"/>
            </td>
            <td style="width:31%; margin: 5px; text-align:center;">
                <asp:ImageButton ID="Image1" runat="server" ImageUrl="~/Images/mobile-swipe-bg03-text.png" OnClick="btnCreateAdditionalService_Click"/>
            </td>
        </tr>
    </table>
</asp:Content>

