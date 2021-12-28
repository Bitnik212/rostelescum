import graphene

from frontend_react.backend.models import UserModel, OrderModel, TariffModel
from .OrderType import OrderType


class OrderMutation(graphene.Mutation):
    class Arguments:
        phone = graphene.String()
        tariff_id = graphene.ID()
        street = graphene.String()
        home = graphene.String()
        appart = graphene.Int()
        city = graphene.String()

    order = graphene.Field(OrderType)

    @classmethod
    def mutate(cls, root, info, phone, tariff_id, street, home, appart, city):
        user = UserModel(phone=phone)
        user.save()
        tariff = TariffModel.objects.filter(id=tariff_id).first()
        order = OrderModel(phone=user, tariff=tariff, street=street, home=home, appart=appart, city=city)
        order.save()
        return OrderMutation(order=order)
