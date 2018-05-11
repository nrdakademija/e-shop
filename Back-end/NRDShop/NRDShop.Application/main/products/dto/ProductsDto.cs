using NRDShop.Application.main.category.dto;
using NRDShop.EF;
using NRDShop.EF.entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.Application.main.products.dto
//TODO
{
    public class ProductsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Summary { get; set; }
        public decimal Price { get; set; }
        public decimal? Rating { get; set; }
        public string Category { get; set; }
    }
}
