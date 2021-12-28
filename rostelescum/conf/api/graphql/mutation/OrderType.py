import graphene
from graphene_django import DjangoObjectType

from frontend_react.backend.models import OrderModel
from .UserModelType import UserModelType


class OrderType(DjangoObjectType):
    class Meta:
        model = OrderModel
        fields = ("id", "status", "done", "street", "appart", "city", "title", "phone")

    id = graphene.ID()
    phone = UserModelType

    def resolve_user(self, info):
        return self.phone

    def resolve_id(self, info):
        return self.order_id
