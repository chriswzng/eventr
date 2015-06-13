using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Eventr.API.Contracts
{
    public class Venue
    {
        public Guid Id ;
        public string Location;
        public int MinPax;
        public int MaxPax;
        public decimal Cost;
        public DateTime StartDate;
        public DateTime EndDate;
        public DateTime StartTime;
        public DateTime EndTime;
        public bool IsFullDay;
        public bool IsSupportWeekDay;
        public bool IsSupportWeekEnd;
    }
}