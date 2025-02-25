"""
Главный маршрутизатор `URL`
"""

from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

from . import settings
from .api.graphql import schema
from .api.rest.api_v1 import api as api_v1


urlpatterns = [
    path('admin/', admin.site.urls),
    # Маршрутизация `Api`
    path('api/v1/', api_v1.urls),
    # Маршрутизация `React`
    path('', include('frontend_react.urls')),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema))),
    # path('', include('<main_app>.urls')),
]


# Для debug_toolbar и отдачи статических фалов / медиа фалов
if settings.DEBUG:
    # Для отладчика
    import debug_toolbar

    urlpatterns.append(
            path('__debug__/', include(debug_toolbar.urls)),
    )

    # Для работы static
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)

    # Для работы  media
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
