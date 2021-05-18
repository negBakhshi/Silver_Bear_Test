using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface IGraphicCardService
    {
        Task<IEnumerable<GraphicCard>> GetGraphicCardsList();
        Task<GraphicCard> GetGraphicCardById(int id);
        Task<GraphicCard> CreateGraphicCard(GraphicCard graphicCard);
        Task UpdateGraphicCard(GraphicCard graphicCard);
        Task DeleteGraphicCard(GraphicCard graphicCard);
    }
}
