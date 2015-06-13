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
            List<Venue> venueList = new List<Venue>();

            foreach (VenueEnt venueEnt in venueEnts)
            {
                venueList.Add(ConvertToContract(venueEnt));
            }

            return venueList;
        }

        private Venue ConvertToContract(VenueEnt venueEnt)
        {
            Venue venue = new Venue();
            venue.Id = venueEnt.Id;
            venue.Location = venueEnt.Location;
            venue.MinPax = venueEnt.MinPax;
            venue.MaxPax = venueEnt.MaxPax;
            venue.Cost = venueEnt.Cost;
            venue.StartDate = venueEnt.startDate;
            venue.EndDate = venueEnt.endDate;
            venue.StartTime = venueEnt.startTime;
            venue.EndTime = venueEnt.endTime;
            venue.IsFullDay = venueEnt.IsFullDay;
            venue.IsSupportWeekDay = venueEnt.IsSupportWeekDay;
            venue.IsSupportWeekEnd = venueEnt.IsSupportWeekEnd;

            return venue;
        }

        private object ConvertToContract(object venue)
        {
            throw new NotImplementedException();
        }
    }
}