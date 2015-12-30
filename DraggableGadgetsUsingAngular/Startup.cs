using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DraggableGadgetsUsingAngular.Startup))]
namespace DraggableGadgetsUsingAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
