using Eventr.API.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Eventr.API.Controllers
{
    [HttpAuthorizeAttribute]
    [RoutePrefix("booking")]
    public class BookingController : ApiController
    {
    }
}
