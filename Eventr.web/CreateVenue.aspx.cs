using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class CreateVenue : System.Web.UI.Page
{
    private string _accessToken;

    protected void Page_Load(object sender, EventArgs e)
    {
        RestClient restClient = new RestClient();
        _accessToken = restClient.GetFacebookAccessToken();
    }

    protected void txtLocation_TextChanged(object sender, EventArgs e)
    {
        TextBox textBox = sender as TextBox;

        RestClient restClient = new RestClient(_accessToken);
        restClient.GetPlaces(textBox.Text);
    }
}