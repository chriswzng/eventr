<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="MainMenu.aspx.cs" Inherits="MainMenu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    Welcome once again to Eventr. What would you like to do?
    <table style="width:100%;border-collapse: separate;border-spacing: 10px 50px;">
        <tr>
            <td style="width:31%; background-color:purple; margin: 5px;">
                <asp:Button ID="btnRentVenue" runat="server" Text="Rent a Venue" />
            </td>
            <td style="width:31%; background-color: red; margin: 5px;">
                <asp:Button ID="btnCreateVenue" runat="server" Text="Create a Venue" OnClick="btnCreateVenue_Click" />
            </td>
            <td style="width:31%; background-color: orange; margin: 5px;">
                <asp:Button ID="btnCreateAdditionalService" runat="server" Text="Create an Event Service" />
            </td>
        </tr>
    </table>
</asp:Content>

