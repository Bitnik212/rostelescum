from django.contrib import admin
from django.db import models

from frontend_react.backend.models import TariffModel, TariffPropsModel


class TariffPropertyRelationModel(models.Model):
    class Article(admin.ModelAdmin):
        list_display = ['tariff', "prop", "active"]
        ordering = ['tariff']

    class Meta:
        verbose_name_plural = "Свойства тарифа"
        verbose_name = verbose_name_plural

    def __str__(self):
        return str(self.tariff)+" - "+str(self.prop)

    tariff = models.ForeignKey(
        to="TariffModel",
        on_delete=models.CASCADE,
        related_name="props",
        verbose_name="тариф",
        null=True
    )
    prop = models.ForeignKey(
        to="TariffPropsModel",
        on_delete=models.CASCADE,
        verbose_name="описание свойства тарифа",
        null=True
    )
    active = models.BooleanField(
        default=True,
        verbose_name="Включен ли он для данного тарифа"
    )
