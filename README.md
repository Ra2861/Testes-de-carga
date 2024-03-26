<h1> Relatório sobre Testes de Carga com k6 </h1>


<h3>Introdução</h3>

Os testes de carga são uma prática essencial no desenvolvimento de software, permitindo avaliar o desempenho e a capacidade de um sistema sob condições de uso intensivo. Uma ferramenta popular para realizar esses testes é o k6, uma plataforma de código aberto desenvolvida em Go.

<h3>Tecnologia Utilizada</h3>
O k6 utiliza uma abordagem baseada em JavaScript para definir e executar cenários de teste. Isso significa que os testes podem ser escritos de forma simples e intuitiva, aproveitando os conceitos familiares da linguagem JavaScript. Além disso, o k6 oferece suporte a várias métricas e visualizações detalhadas, permitindo uma análise profunda do desempenho do sistema.

<h3>Conceitos </h3>
Alguns conceitos importantes que podem ser aprendidos ao utilizar o k6 incluem:

Requisições HTTP: O k6 permite simular solicitações HTTP, como GET, POST, PUT, DELETE, entre outras, para testar a resposta do sistema a diferentes tipos de solicitações.

Métricas de Desempenho: Durante os testes, o k6 coleta uma variedade de métricas de desempenho, como tempo de resposta, taxa de transferência e uso de recursos, fornecendo insights valiosos sobre o comportamento do sistema.

Cenários de Teste: Os cenários de teste definem o comportamento dos usuários virtuais durante a execução dos testes. Eles podem incluir diferentes tipos de solicitações, padrões de carga e sequências de ações.


Conclusão
Os testes de carga com o k6 são uma ferramenta poderosa para avaliar o desempenho e a escalabilidade de um sistema. Com sua abordagem baseada em JavaScript e sua variedade de recursos, o k6 torna mais fácil e acessível realizar testes de carga detalhados e informativos. Ao dominar os conceitos fundamentais do k6, os desenvolvedores podem melhorar a qualidade e o desempenho de seus aplicativos, garantindo uma experiência positiva para os usuários finais.

Saida dos testes:

teste de distribuição de 10/5
![test-distribuition-10vu-5min](https://github.com/Ra2861/Testes-de-carga/assets/99209068/b446a011-f77f-43f4-a0e7-1bd4015289ff)
teste de distribuição de 100/5
![test-distribuition-100vu-5min](https://github.com/Ra2861/Testes-de-carga/assets/99209068/ff418680-296d-4d0b-99cc-0ed599413e07)
teste de distribuição de 100/15
![test-distribuition-100vu-15min](https://github.com/Ra2861/Testes-de-carga/assets/99209068/8d29191f-1cb9-4d17-9f23-82da85dc5dfe)
teste de distribuição de 1000/15
![test-distribuition-1000vu-15min](https://github.com/Ra2861/Testes-de-carga/assets/99209068/4bfc8138-796f-4f7a-9fd1-ac6eaf587eb5)
teste de distribuição de 1000/30
![test-distribuition-1000vu-30min](https://github.com/Ra2861/Testes-de-carga/assets/99209068/384ae935-9ac0-473f-93d0-373a242acf94)
teste de distribuição de 10000/30
![test-distribuition-10000vu-30min](https://github.com/Ra2861/Testes-de-carga/assets/99209068/91a56d60-2acd-4bb5-a6c3-4bb67a49a947)

