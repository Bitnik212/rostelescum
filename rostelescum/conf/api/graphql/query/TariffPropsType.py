from graphene_django import DjangoObjectType

from frontend_react.backend.models import TariffPropsModel


class TariffPropsType(DjangoObjectType):
    class Meta:
        model = TariffPropsModel
        fields = ("title", "description", "icon_name")
