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
        internal IEnumerable<VenueContract> GetVenues()
        {
            VenueRepository venueRepository = new VenueRepository();
            List<VenueEnt> venueEnts = venueRepository.GetVenues();

            return ConvertToContract(venueEnts);
        }

        private VenueContract ConvertToContract(VenueEnt venueEnt)
        {
            VenueContract venue = new VenueContract();
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

        private IEnumerable<VenueContract> ConvertToContract(IEnumerable<VenueEnt> venueEnts)
        {
            List<VenueContract> venueContracts = new List<VenueContract>();
            foreach (VenueEnt venueEnt in venueEnts)
            {
                venueContracts.Add(ConvertToContract(venueEnt));
            }

            return venueContracts;
        }

        internal Guid CreateVenue(VenueContract venueContract)
        {
            VenueEnt venueEnt = new VenueEnt();
            venueEnt.Id = Guid.NewGuid();
            venueEnt.Cost = venueContract.Cost;
            venueEnt.startDate = venueContract.StartDate;
            venueEnt.startTime = venueContract.StartTime;
            venueEnt.endDate = venueContract.EndDate;
            venueEnt.endTime = venueContract.EndTime;
            venueEnt.IsFullDay = venueContract.IsFullDay;
            venueEnt.IsSupportWeekDay = venueContract.IsSupportWeekDay;
            venueEnt.IsSupportWeekEnd = venueContract.IsSupportWeekEnd;
            venueEnt.MinPax = venueContract.MinPax;
            venueEnt.MaxPax = venueContract.MaxPax;
            
            UserVenueEnt userVenueEnt = new UserVenueEnt();
            userVenueEnt.Id = Guid.NewGuid();
            userVenueEnt.UserId = Guid.NewGuid();

            venueEnt.UserVenues.Add(userVenueEnt);

            VenueRepository venueRepository = new VenueRepository();
            venueRepository.AddVenue(venueEnt);
            
            if (venueRepository.Commit())
                return venueEnt.Id;

            return Guid.Empty;
        }
    }
}