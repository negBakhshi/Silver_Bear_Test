using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class GraphicCardModel
    {
        public GraphicCardModel()
        {
            GraphicCards = new HashSet<GraphicCard>();
        }

        public int Id { get; set; }
        public int BrandId { get; set; }
        public string Name { get; set; }
        public bool Archived { get; set; }

        public virtual Brand Brand { get; set; }
        public virtual ICollection<GraphicCard> GraphicCards { get; set; }
    }
}
