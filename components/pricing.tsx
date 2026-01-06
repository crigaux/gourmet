"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small restaurants",
      features: [
        "Up to 50 tables",
        "Basic reservations",
        "Order management",
        "Email support",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "149",
      description: "For growing restaurant chains",
      features: [
        "Unlimited tables",
        "Advanced AI reservations",
        "Full analytics dashboard",
        "Priority 24/7 support",
        "Staff management",
        "Custom branding",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large restaurant groups",
      features: [
        "Everything in Professional",
        "Multi-location support",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
        "On-premise option",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <span className="gradient-text">Simple, transparent pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Choose Your
            <br />
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 card-lift ${
                plan.popular
                  ? "glass-card gradient-border glow-secondary scale-105"
                  : "glass-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="glass rounded-full px-4 py-1.5 flex items-center gap-1.5 glow-luxury">
                    <Sparkles className="w-3.5 h-3.5 text-luxury" />
                    <span className="text-xs font-bold gradient-text">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end gap-2">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-5xl font-extrabold gradient-text">${plan.price}</span>
                      <span className="text-muted-foreground mb-2">/month</span>
                    </>
                  ) : (
                    <span className="text-5xl font-extrabold gradient-text">Custom</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-0.5 ${
                      plan.popular ? "bg-gradient-mesh" : "bg-secondary"
                    }`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full font-semibold ${
                  plan.popular
                    ? "bg-gradient-mesh text-white hover:shadow-2xl hover:scale-105"
                    : "glass-card hover:scale-105"
                } transition-all duration-300`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            All plans include a <span className="font-semibold text-foreground">14-day free trial</span>.
            No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
