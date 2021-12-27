from graphene_django import DjangoObjectType

from frontend_react.backend.models import TariffModel, TariffPropsModel


class TariffType(DjangoObjectType):
    class Meta:
        model = TariffModel
        fields = ("title", "price", "published")
