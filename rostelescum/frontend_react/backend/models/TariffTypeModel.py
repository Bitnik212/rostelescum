import inspect

from django.contrib import admin
from django.db import models


class TariffTypeModel(models.Model):

    class Article(admin.ModelAdmin):
        list_display = ['name']
        ordering = ['name']

    class Meta:
        verbose_name_plural = "Типы тарифа"
        verbose_name = "тип тарифа"

    def __str__(self):
        return self.name

    name = models.CharField(max_length=60, verbose_name="Название типа тарифа")
    active = models.BooleanField(default=False, verbose_name="Включен ли этот тип тарифов")
