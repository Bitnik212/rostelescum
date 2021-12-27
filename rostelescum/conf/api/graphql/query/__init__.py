import graphene
from graphene import ObjectType

from frontend_react.backend.repositories.TariffRepository import TariffRepository
from .TariffPropsType import TariffPropsType
from .TariffType import TariffType


class Query(ObjectType):

    all_tariffs = graphene.List(TariffType)
    all_tariff_props = graphene.List(TariffPropsType, id=graphene.ID(required=True))

    def resolve_all_tariffs(self, info):
        repository = TariffRepository()
        return repository.all()

    def resolve_all_tariff_props(self, info, id: int):
        repository = TariffRepository()
        print(id, info)
        return repository.all_props(id)

