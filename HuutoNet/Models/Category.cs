using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuutoNet.Models
{
    public class Category: BaseCategory
    {
        public CategoryLink Links { get; set; }
    }
}
