﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class EventrAPIEntities1 : DbContext
    {
        public EventrAPIEntities1()
            : base("name=EventrAPIEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<AdditionalServiceEnt> AdditionalServiceEnts { get; set; }
        public DbSet<BookingEnt> BookingEnts { get; set; }
        public DbSet<BookingAdditionalServiceEnt> BookingAdditionalServiceEnts { get; set; }
        public DbSet<EventCategoryEnt> EventCategoryEnts { get; set; }
        public DbSet<MediumEnt> MediumEnts { get; set; }
        public DbSet<ServiceTypeEnt> ServiceTypeEnts { get; set; }
        public DbSet<ServiceTypeEventCategoryEnt> ServiceTypeEventCategoryEnts { get; set; }
        public DbSet<UserEnt> UserEnts { get; set; }
        public DbSet<UserVenueEnt> UserVenueEnts { get; set; }
        public DbSet<VenueEnt> VenueEnts { get; set; }
    }
}
