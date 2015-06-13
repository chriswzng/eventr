using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MainMenu : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnCreateVenue_Click(object sender, EventArgs e)
    {
        Response.Redirect("CreateVenue.aspx");
    }
    protected void btnCreateAdditionalService_Click(object sender, EventArgs e)
    {
        Response.Redirect("CreateEventService.aspx");
    }
}