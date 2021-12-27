from enum import Enum

from .TariffModel import TariffModel
from .TariffPropsModel import TariffPropsModel


class Models(Enum):
    tariff = TariffModel
    tariff_props = TariffPropsModel
