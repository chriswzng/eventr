//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Eventr.API.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class AdditionalServiceEnt
    {
        public AdditionalServiceEnt()
        {
            this.BookingAdditionalServices = new HashSet<BookingAdditionalServiceEnt>();
            this.Media = new HashSet<MediumEnt>();
        }
    
        public System.Guid Id { get; set; }
        public System.Guid ServiceTypeID { get; set; }
        public System.DateTime startDate { get; set; }
        public System.DateTime endDate { get; set; }
        public System.TimeSpan startTime { get; set; }
        public System.TimeSpan endTime { get; set; }
    
        public virtual ICollection<BookingAdditionalServiceEnt> BookingAdditionalServices { get; set; }
        public virtual ICollection<MediumEnt> Media { get; set; }
    }
}
