using EventrAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EventrAPI.Controllers
{
    [RoutePrefix("venue")]
    public class VenueController : ApiController
    {
        [HttpGet]
        public IEnumerable<object> GetVenues()
        {
            VenueService venueService = new VenueService();
            return venueService.GetVenues();
        }
    }
}
