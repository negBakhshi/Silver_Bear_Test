using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface IGraphicCardModelService
    {
        Task<IEnumerable<GraphicCardModel>> GetGraphicCardModelsList();
        Task<GraphicCardModel> GetGraphicCardModelById(int id);
        Task<GraphicCardModel> CreateGraphicCardModel(GraphicCardModel gcModel);
        Task UpdateGraphicCardModel(GraphicCardModel gcModel);
        Task DeleteGraphicCardModel(GraphicCardModel gcModel);
    }
}
