using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuutoNet.Models
{
    public class HuutoNetCategories: BaseCategory
    {
        public DateTime Updated { get; set; }
        public Link Links { get; set; }
        public List<Category> Categories { get; set; }
    }
}
