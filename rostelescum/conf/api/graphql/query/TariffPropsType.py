from graphene import Boolean, ID, String
from graphene_django import DjangoObjectType

from frontend_react.backend.models import TariffPropertyRelationModel


class TariffPropsType(DjangoObjectType):
    class Meta:
        model = TariffPropertyRelationModel
        fields = ("id", "title", "description", "icon_name", "active")

    id = ID
    title = String()
    description = String()
    icon_name = String()

    def resolve_id(self, info) -> int:
        return self.prop.id

    def resolve_title(self, info):
        return self.prop.title

    def resolve_description(self, info):
        return self.prop.description

    def resolve_icon_name(self, info):
        return self.prop.icon_name

