using System;
using System.Collections.Generic;

namespace NRDShop.EF.entities
{
    public partial class Products
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
        public decimal Price { get; set; }
        public decimal? Rating { get; set; }
        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }
}
