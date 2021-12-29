import graphene
from graphene import ObjectType

from frontend_react.backend.repositories.TariffRepository import TariffRepository
from .TariffPropsType import TariffPropsType
from .TariffType import TariffType


class Query(ObjectType):

    all_tariffs = graphene.List(TariffType)

    def resolve_all_tariffs(self, info):
        repository = TariffRepository()
        return list(repository.all())

