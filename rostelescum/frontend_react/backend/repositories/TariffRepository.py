import inspect

from frontend_react.backend.models import TariffModel, TariffPropsModel


class TariffRepository:

    def full(self) -> list[dict]:
        tariffs: list[TariffModel] = list(TariffModel.objects.all())
        tariffs_dict = []
        for tariff in tariffs:
            members = dict(inspect.getmembers(tariff))["__dict__"]
            members_copy = members.copy()
            for column in members:
                if str(column).startswith("_"):
                    members_copy.pop(column)
            result = {member: tariff.__getattribute__(member) for member in members_copy}
            props = TariffPropsModel.objects.filter(tariff=tariff)
            result.update({"props": list(props)})
            tariffs_dict.append(result)
        print(tariffs_dict)
        return tariffs_dict

    def all(self):
        return TariffModel.objects.all()

    def all_props(self, tariff_id: int) -> list[TariffPropsModel] or None:
        tariff = TariffModel.objects.filter(id=tariff_id).first()
        if tariff is None:
            return None
        props = list(TariffPropsModel.objects.filter(tariff=tariff))
        return props



# TariffRepository().all_props(2)
