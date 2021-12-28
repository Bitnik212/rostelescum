from graphene_django import DjangoObjectType

from conf.api.graphql.query import TariffType
from frontend_react.backend.models import UserModel


class UserModelType(DjangoObjectType):
    class Meta:
        model = UserModel
        field = ("id", "first_name", "second_name", "last_name", "phone", "password", "published", "active_tariff")

    active_tariff = TariffType

    def resolve_active_tariff(self, info):
        return self.active_tariff