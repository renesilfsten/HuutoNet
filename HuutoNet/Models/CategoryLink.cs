using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuutoNet.Models
{
    public class CategoryLink: Link
    {
        public Uri SubCategories { get; set; }

        //"links":{
        //    "self":"https:\/\/api.huuto.net\/1.1\/categories\/1",
        //    "subcategories":"https:\/\/api.huuto.net\/1.1\/categories\/1\/subcategories",
        //    "items":"https:\/\/api.huuto.net\/1.1\/categories\/1\/items"
        //}
    }
}
