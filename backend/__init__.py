from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Optional

app = FastAPI(title="AL STUDIO API", version="1.0.0")

wardrobe = [
    {
        "id": 1,
        "type": "Haut",
        "name": "Chemise beige",
        "color": "Beige",
        "season": "Printemps",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    },
    {
        "id": 2,
        "type": "Bas",
        "name": "Jean droit",
        "color": "Bleu",
        "season": "Toute saison",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    },
    {
        "id": 3,
        "type": "Chaussures",
        "name": "Sneakers blanches",
        "color": "Blanc",
        "season": "Printemps",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
]

looks = [
    {
        "id": 1,
        "title": "Look du jour",
        "recommendation": "Cheveux lâchés",
        "temp": "26°",
        "mood": "Après-midi légère",
        "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
        "palette": ["#E7D7C9", "#D7C1A6", "#8B6A4B"],
        "beauty": {
            "hair": "Cheveux lâchés avec une légère ondulation",
            "makeup": "Teint lumineux et blush doux",
        },
    },
    {
        "id": 2,
        "title": "Look bureau",
        "recommendation": "Mise en beauté naturelle",
        "temp": "22°",
        "mood": "Coup de frais le matin",
        "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
        "palette": ["#BFD1D5", "#E8E0D6", "#A87F65"],
        "beauty": {
            "hair": "Chignon bas et volume discret",
            "makeup": "Fard neutre et lèvres rosées",
        },
    },
]

calendar = {
    "2026-09-25": 1,
    "2026-09-27": 2,
}

profile = {
    "firstName": "Anaïs",
    "stylePreferences": ["Chic", "Minimal", "Décontracté"],
    "colorimetry": {
        "skin": "Claire",
        "eyes": "Marron",
        "hair": "Brun",
    },
    "sizes": {
        "top": "S",
        "bottom": "34",
        "shoes": "38",
    },
    "goals": ["Gain de temps le matin", "Looks adaptés à la météo"],
}


class WardrobeItem(BaseModel):
    id: Optional[int] = None
    type: str
    name: str
    color: str
    season: str
    image: Optional[str] = None


class CalendarPlan(BaseModel):
    date: str = Field(..., example="2026-09-25")
    look_id: int = Field(..., ge=1)


@app.get("/health")
def health_check():
    return {"status": "ok", "app": "AL STUDIO API"}


@app.get("/looks")
def get_looks():
    return {"items": looks}


@app.get("/wardrobe")
def get_wardrobe():
    return {"items": wardrobe}


@app.post("/wardrobe", status_code=201)
def create_wardrobe_item(item: WardrobeItem):
    new_item = item.model_dump()
    new_item["id"] = max((entry["id"] for entry in wardrobe), default=0) + 1
    wardrobe.append(new_item)
    return {"message": "Vêtement ajouté", "item": new_item}


@app.get("/calendar")
def get_calendar():
    return {"items": calendar}


@app.post("/calendar")
def plan_look(plan: CalendarPlan):
    calendar[plan.date] = plan.look_id
    return {"message": "Look planifié", "date": plan.date, "look_id": plan.look_id}


@app.get("/profile")
def get_profile():
    return profile


@app.get("/weather")
def get_weather():
    return {
        "city": "Marseille",
        "temperature_c": 26,
        "summary": "Après-midi ensoleillée",
        "recommendation": "Prioriser des matières légères et des looks confortables.",
    }


@app.get("/recommendation")
def get_recommendation():
    weather = get_weather()
    return {
        "temperature": weather["temperature_c"],
        "look": looks[0],
        "suggested_style": "Chic et léger",
        "notes": "Le look du jour est conseillé pour une journée chaude et lumineuse.",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
