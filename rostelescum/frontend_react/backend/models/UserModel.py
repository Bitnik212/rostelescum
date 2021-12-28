import inspect

from django.contrib import admin
from django.db import models


class UserModel(models.Model):

    class Article(admin.ModelAdmin):
        list_display = ['id', 'second_name', 'first_name', 'last_name', 'phone']
        ordering = ['id']

    class Meta:
        verbose_name_plural = "Пользователи"
        verbose_name = "пользователь"

    def __str__(self):
        return self.phone

    first_name = models.CharField(max_length=25, verbose_name="Имя", blank=True)
    second_name = models.CharField(max_length=25, verbose_name="Фамилия", blank=True)
    last_name = models.CharField(max_length=25, verbose_name="Отчество", blank=True)
    phone = models.TextField(verbose_name="Номер телефона")
    password = models.CharField(max_length=25, verbose_name="Пароль", default="123456789")
    active_tariff = models.ForeignKey(
        "TariffModel",
        on_delete=models.CASCADE,
        verbose_name="Активный тариф",
        null=True,
        blank=True
    )
    published = models.BooleanField(default=True)
