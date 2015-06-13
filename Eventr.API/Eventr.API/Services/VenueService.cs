using Eventr.API.Contracts;
using Eventr.API.Models;
using Eventr.API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Eventr.API.Services
{
    public class VenueService
    {
        internal IEnumerable<Venue> GetVenues()
        {
            VenueRepository venueRepository = new VenueRepository();
            List<VenueEnt> venueEnts = venueRepository.GetVenues();
          


            //foreach(VenueEnt venueEnt in venueEnts)
            //{

            //}

        }

        private IEnumerable<object> 


        //private Venue ConvertToContract(VenueEnt venueEnt)
        //{
        //    Venue venue = new Venue();
        //    venue.Cost = venueEnt.Cost;
        //    venue.EndDate = venueEnt.endDate;  
          
        //    return venue;
        //}

        private object ConvertToContract(object venue)
        {
            throw new NotImplementedException();
        }
    }
}