using Eventr.API.Models;
using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Eventr.API.Repositories
{
    public class VenueRepository : BaseRepository
    {
        public VenueRepository() : base()
        {
        }

        internal List<VenueEnt> GetVenues()
        {
            return DataContext.VenueEnts.ToList();
        }

        internal void AddVenue(VenueEnt venueEnt)
        {
            DataContext.VenueEnts.Add(venueEnt);
        }

        internal void UpdateVenue(VenueEnt venueEnt)
        {

        }
    }
}