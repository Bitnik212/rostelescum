import inspect

from django.contrib import admin
from django.db import models

from .UserModel import UserModel


class OrderModel(models.Model):
    STATUS = [
        ('in_processing', 'В обработке'),
        ('adopted', 'Принят'),
        ('performed', 'Выполняется'),
        ('done', 'Готово')
    ]

    class Article(admin.ModelAdmin):
        list_display = ['title', 'tariff', 'phone', 'status', 'done']
        ordering = ['title']

    class Meta:
        verbose_name_plural = "Заказы"
        verbose_name = "заказ"

    def __str__(self):
        return "Заказ #{0}".format(str(self.order_id))

    title = models.TextField(editable=False)

    def save(self, *args, **kwargs):
        super(OrderModel, self).save(*args, **kwargs)
        title = f"Заказ #{self.order_id}"
        OrderModel.objects.filter(pk=self.pk).update(title=title)
        if self.status == 'done' and self.done is False:
            UserModel.objects.filter(phone=self.phone).update(active_tariff=self.tariff)
            OrderModel.objects.filter(pk=self.pk).update(done=True)

    order_id = models.AutoField(primary_key=True)
    phone = models.ForeignKey(
        "UserModel",
        on_delete=models.CASCADE,
        verbose_name="Номер телефона клиента",
        null=True
    )
    tariff = models.ForeignKey(
        "TariffModel",
        on_delete=models.CASCADE,
        verbose_name="Выбранный тариф",
        null=True
    )
    status = models.CharField(max_length=13, choices=STATUS, default='in_processing')
    done = models.BooleanField(default=False, verbose_name="Выполнено", editable=False)
    street = models.CharField(max_length=128, verbose_name="Улица", null=True)
    home = models.CharField(verbose_name="Дом", max_length=200, null=True)
    appart = models.IntegerField(verbose_name="Квартира", null=True)
    city = models.CharField(verbose_name="Город", max_length=500, null=True, default="Санкт-Петербург")
