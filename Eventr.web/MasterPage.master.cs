using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

public partial class MyMasterPage : System.Web.UI.MasterPage
{
    private HtmlGenericControl contentCSS;

    public HtmlGenericControl ContentCSS
    {
        get { return this.content; }
        set { contentCSS = value; }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["userLogin"] != null)
        {
            PlaceHolder2.Visible = true;
            PlaceHolder1.Visible = false;
        }
        else
        {
            PlaceHolder2.Visible = false;
            PlaceHolder1.Visible = true;
        }
    }
    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        Session["userLogin"] = null;
        Response.Redirect("Default.aspx");
    }
}
