using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

public partial class AddComplete : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        MyMasterPage master = Master as MyMasterPage;
        HtmlGenericControl controlFromMaster = master.ContentCSS as HtmlGenericControl;
        controlFromMaster.Style.Add("background-image", "url('Images/bg-02.jpg')");
        controlFromMaster.Style.Add("background-size", "cover");
    }
}