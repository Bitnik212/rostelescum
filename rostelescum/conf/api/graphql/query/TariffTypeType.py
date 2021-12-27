from graphene_django import DjangoObjectType

from frontend_react.backend.models import TariffTypeModel


class TariffTypeType(DjangoObjectType):
    class Meta:
        model = TariffTypeModel
        fields = ("id", "name", "active")
