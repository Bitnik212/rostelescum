from enum import Enum

from .TariffModel import TariffModel
from .TariffPropertyRelationModel import TariffPropertyRelationModel
from .TariffPropsModel import TariffPropsModel
from .TariffTypeModel import TariffTypeModel
from .OrderModel import OrderModel
from .UserModel import UserModel


class Models(Enum):
    tariff = TariffModel
    tariff_props = TariffPropsModel
    tariff_type = TariffTypeModel
    tariff_property_relation = TariffPropertyRelationModel
    order = OrderModel
    user = UserModel
