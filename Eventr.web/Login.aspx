<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h1>Sign In</h1>
    <table style="font-size:16pt;">
        <tr>
            <td>
                Email:<br />
                <asp:TextBox ID="txtEmail" runat="server" TextMode="Email"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td style="padding-top:20px;">
                Password (or <a href="#" style="color:#26a9e0;">did you forget?</a>):<br />
                <asp:TextBox ID="txtLogin" runat="server" TextMode="Password"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td style="padding-top:20px;">
                <asp:Button ID="btnLogin" runat="server" Text="Log in" OnClick="btnLogin_Click" />
            </td>
        </tr>
    </table>
</asp:Content>

