from frontend_react.backend.models import TariffModel, TariffPropsModel, TariffPropertyRelationModel


class TariffRepository:

    def all(self):
        return TariffModel.objects.all()

    def all_props(self, tariff_id: int) -> list[TariffPropsModel] or None:
        tariff = TariffModel.objects.filter(id=tariff_id).first()
        if tariff is None:
            return None
        return list(TariffPropertyRelationModel.objects.filter(tariff=tariff))
