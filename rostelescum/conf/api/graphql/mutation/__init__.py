from graphene import ObjectType

from .OrderMutation import OrderMutation


class Mutation(ObjectType):
    create_order = OrderMutation.Field()

