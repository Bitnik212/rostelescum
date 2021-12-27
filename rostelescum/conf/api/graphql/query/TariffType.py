from graphene import List
from graphene_django import DjangoObjectType

from . import TariffPropsType
from .TariffTypeType import TariffTypeType
from frontend_react.backend.models import TariffModel
from frontend_react.backend.repositories.TariffRepository import TariffRepository


class TariffType(DjangoObjectType):
    class Meta:
        model = TariffModel
        fields = ("id", "title", "price", "published", "type", "props")

    type = TariffTypeType
    props = List(TariffPropsType)

    def resolve_type(self, info):
        return self.type

    def resolve_props(self, info):
        repository = TariffRepository()
        return repository.all_props(self.id)
