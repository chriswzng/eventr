using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class CategoryList
{
    public string id { get; set; }
    public string name { get; set; }
}

public class Location
{
    public string street { get; set; }
    public string city { get; set; }
    public string state { get; set; }
    public string country { get; set; }
    public string zip { get; set; }
    public double latitude { get; set; }
    public double longitude { get; set; }
    public string located_in { get; set; }
}

public class Datum
{
    public string category { get; set; }
    public List<CategoryList> category_list { get; set; }
    public Location location { get; set; }
    public string name { get; set; }
    public string id { get; set; }
}

public class Paging
{
    public string next { get; set; }
}

public class RootObject
{
    public List<Datum> data { get; set; }
    public Paging paging { get; set; }
}